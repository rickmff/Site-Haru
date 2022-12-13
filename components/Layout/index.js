import Footer from './Footer'
import Meta from './Meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-slate-100">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
