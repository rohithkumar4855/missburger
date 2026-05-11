export const schema = {
  types: [
    {
      name: 'category',
      title: 'Category',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
        { name: 'image', title: 'Image', type: 'image' },
      ],
    },
    {
      name: 'foodItem',
      title: 'Food Item',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'price', title: 'Original Price', type: 'number' },
        { name: 'offerPrice', title: 'Offer Price', type: 'number' },
        { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'isVeg', title: 'Is Vegetarian', type: 'boolean' },
        { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(0).max(5) },
        { name: 'popular', title: 'Popular Badge', type: 'boolean' },
        { name: 'trending', title: 'Trending Badge', type: 'boolean' },
        { name: 'stockStatus', title: 'In Stock', type: 'boolean', initialValue: true },
        { name: 'branchAvailability', title: 'Available in Branches', type: 'array', of: [{ type: 'reference', to: [{ type: 'branch' }] }] },
      ],
    },
    {
      name: 'branch',
      title: 'Branch',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'location', title: 'Location Address', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
        { name: 'timing', title: 'Opening Timings', type: 'string' },
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    },
    {
      name: 'deal',
      title: 'Deals',
      type: 'document',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'code', title: 'Coupon Code', type: 'string' },
        { name: 'discount', title: 'Discount Text', type: 'string' },
        { name: 'image', title: 'Banner Image', type: 'image' },
      ],
    },
  ],
}
