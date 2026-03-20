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

interface CategoryData {
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
}

interface ProductData {
  name: string;
  slug: string;
  category_id: string;
  description?: string;
  dimensions?: string;
  base_price: string;
  is_wet: boolean;
  requires_staff: boolean;
  stock_quantity: string;
  status: string;
  image_url?: string;
}

interface BookingItem {
  product_id: string | number;
  quantity: number;
  price_per_unit: number;
}

interface BookingData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  delivery_address: string;
  total_price: number;
  notes?: string;
  items: BookingItem[];
}

// Categories
export async function createCategory(data: CategoryData) {
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

export async function updateCategory(id: number, data: CategoryData) {
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
export async function createProduct(data: ProductData) {
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

export async function updateProduct(id: number, data: ProductData) {
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

import { Resend } from 'resend';

const resend = new Resend(process.env.resend_key);

// Bookings - Forward via Email only (no DB storage as per user request)
export async function createBooking(data: BookingData) {
  try {
    const itemsHtml = data.items.map((item: BookingItem) => `
      <div style="padding: 10px; border-bottom: 1px solid #edf2f7;">
        <p style="margin: 0; font-weight: bold; color: #1a202c;">Item ID: ${item.product_id}</p>
        <p style="margin: 5px 0 0; color: #718096; font-size: 14px;">Quantity: ${item.quantity} | Price: $${item.price_per_unit}</p>
      </div>
    `).join('');

    const { error: emailError } = await resend.emails.send({
      from: 'Ride & Slide <hello@rideandslidepartyco.com>',
      to: 'Rideandslidepartyco@gmail.com',
      subject: `NEW BOOKING REQUEST: ${data.customer_name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #f97316; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Booking Request</h1>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 0;">Customer Information</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.customer_name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.customer_email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.customer_phone}</p>
            
            <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 30px;">Event Details</h2>
            <p style="margin: 10px 0;"><strong>Dates:</strong> ${data.start_date} to ${data.end_date}</p>
            <p style="margin: 10px 0;"><strong>Times:</strong> ${data.start_time} - ${data.end_time}</p>
            <p style="margin: 10px 0;"><strong>Delivery Address:</strong> ${data.delivery_address}</p>
            <p style="margin: 10px 0;"><strong>Notes:</strong> ${data.notes || 'None'}</p>
            
            <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 30px;">Requested Items</h2>
            <div style="background: #f8fafc; border-radius: 8px;">
              ${itemsHtml}
            </div>
            
            <div style="margin-top: 30px; text-align: right;">
              <p style="font-size: 20px; font-weight: 900; color: #0f172a; margin: 0;">Total Estimated: <span style="color: #f97316;">$${data.total_price.toFixed(2)}</span></p>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
            This is an automated booking request from rideandslidepartyco.com
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error('Error sending booking email:', emailError);
      return { success: false, error: 'Failed to send booking notification.' };
    }

    revalidatePath('/admin');
    // Return a dummy ID since we're not saving to DB
    return { success: true, bookingId: Date.now().toString() };
  } catch (error) {
    console.error('Booking submission error:', error);
    return { success: false, error: 'Internal server error during booking submission.' };
  }
}
