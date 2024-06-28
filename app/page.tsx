import Image from "next/image";

export default function Home() {
  return (
    <main role="main" className="container">
      <div className="row">

        {/* articles thumbnails grid */}

        <nav className="navigation col-xs-12">
          <i className="fas fa-angle-double-left"></i>
          <i className="fas fa-angle-double-right"></i>
        </nav>
      </div>
    </main>
  );
}
