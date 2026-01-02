const BASE_URL = "https://impactprenuer-backend.onrender.com/api"

// Fetch blogs
export async function fetchBlogs(page = 1) {
  const res = await fetch(`${BASE_URL}/blogs/?page=${page}`)
  if (!res.ok) throw new Error("Failed to fetch blogs")
  const data = await res.json()
  return data.results // return only the results array
}

// Fetch single blog by ID
export async function fetchBlogById(id) {
  const res = await fetch(`${BASE_URL}/blogs/${id}`)
  if (!res.ok) throw new Error("Failed to fetch blog")
  return await res.json()
}

// Fetch programs
export async function fetchPrograms(page = 1) {
  const res = await fetch(`${BASE_URL}/programs/?page=${page}`)
  if (!res.ok) throw new Error("Failed to fetch programs")
  const data = await res.json()
  return data.results
}

// Fetch single program by ID
export async function fetchProgramById(id) {
  const res = await fetch(`${BASE_URL}/programs/${id}`)
  if (!res.ok) throw new Error("Failed to fetch program")
  return await res.json()
}

// Fetch team members
export async function fetchTeamMembers(page = 1) {
  const res = await fetch(`${BASE_URL}/team/?page=${page}`)
  if (!res.ok) throw new Error("Failed to fetch team members")
  const data = await res.json()
  return data.results
}
