// services/dashboard.ts

export async function fetchDashboardData() {
    try {
      const [productRes, blogRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/blogs"),
      ])
      const [productData, blogData] = await Promise.all([
        productRes.json(),
        blogRes.json(),
      ])
      return { products: productData, blogs: blogData }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      throw error
    }
  }
  