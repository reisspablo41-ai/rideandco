'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function getSupabaseAdmin() {
  if (!supabaseAdmin) {
    throw new Error('Supabase Admin client not initialized');
  }
  return supabaseAdmin;
}

// Categories
export async function createCategory(data: any) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('categories').insert({
    name: data.name,
    slug: data.slug,
    description: data.description,
    image_url: data.image_url,
  });

  if (error) {
    console.error('Error creating category:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/categories');
  redirect('/admin/categories');
}

export async function updateCategory(id: number, data: any) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from('categories')
    .update({
      name: data.name,
      slug: data.slug,
      description: data.description,
      image_url: data.image_url,
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating category:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/categories');
  redirect('/admin/categories');
}

export async function deleteCategory(id: number) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('categories').delete().eq('id', id);

  if (error) {
    console.error('Error deleting category:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/categories');
}

// Products
export async function createProduct(data: any) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('products').insert({
    name: data.name,
    slug: data.slug,
    category_id: data.category_id ? parseInt(data.category_id) : null,
    description: data.description,
    dimensions: data.dimensions,
    base_price: parseFloat(data.base_price),
    is_wet: data.is_wet,
    requires_staff: data.requires_staff,
    stock_quantity: parseInt(data.stock_quantity),
    status: data.status,
    image_url: data.image_url,
  });

  if (error) {
    console.error('Error creating product:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function updateProduct(id: number, data: any) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from('products')
    .update({
      name: data.name,
      slug: data.slug,
      category_id: data.category_id ? parseInt(data.category_id) : null,
      description: data.description,
      dimensions: data.dimensions,
      base_price: parseFloat(data.base_price),
      is_wet: data.is_wet,
      requires_staff: data.requires_staff,
      stock_quantity: parseInt(data.stock_quantity),
      status: data.status,
      image_url: data.image_url,
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating product:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export async function deleteProduct(id: number) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    throw new Error(error.message);
  }

  revalidatePath('/admin/products');
}

// Bookings
export async function createBooking(data: any) {
  const supabase = getSupabaseAdmin();

  // 1. Create the booking record
  const { data: booking, error: bookingError } = await supabase
    .from('bookings')
    .insert({
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      customer_phone: data.customer_phone,
      start_date: data.start_date,
      end_date: data.end_date,
      start_time: data.start_time,
      end_time: data.end_time,
      delivery_address: data.delivery_address,
      total_price: data.total_price,
      notes: data.notes,
      status: 'pending'
    })
    .select()
    .single();

  if (bookingError) {
    console.error('Error creating booking:', bookingError);
    return { success: false, error: bookingError.message };
  }

  // 2. Create booking items
  const bookingItems = data.items.map((item: any) => ({
    booking_id: booking.id,
    product_id: item.product_id,
    quantity: item.quantity,
    price_per_unit: item.price_per_unit
  }));

  const { error: itemsError } = await supabase
    .from('booking_items')
    .insert(bookingItems);

  if (itemsError) {
    console.error('Error creating booking items:', itemsError);
    // Note: In a real app, you might want to delete the booking record here (rollback)
    return { success: false, error: itemsError.message };
  }

  revalidatePath('/admin');
  return { success: true, bookingId: booking.id };
}
