import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Suhas Nama, a full stack software engineer with professional experience of 5.8+ years in the industry. I've experience working with Java, Spring Boot, React, Typescript, Node.js, and DynamoDB. I'm open to new opportunities , reach out to me at suhasnama23@gmail.com.`}
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
