function Footer() {
  return (
    <div className="mt-20">
      <div className="flex flex-col">
        <h2 className="text-4xl font-semibold">Ready to start journaling?</h2>
        <p className="leading-relaxed p-2">
          Distraction-free, private, and local-first.
        </p>
        <button className="bg-accent m-5 text-white font-jakarta font-medium text-sm px-6 py-3 rounded-2xl hover:bg-[#344e78] transition-colors shadow-xs cursor-pointer w-fit p-2">
          Download Quil
        </button>
      </div>
      <div className="border-t border-t-border mt-5 p-5 flex flex-col items-center gap-3">
        <p>© {new Date().getFullYear()} Quill. All rights reserved.</p>
        <p className="text-center">
          Created with love by{" "}
          <a href="https://github.com/nicesapien" className="text-accent hover:text-[#2c4061] underline underline-offset-4 decoration-transparent hover:decoration-accent transition-all">NiceSapien</a>,{" "}
          <a href="https://github.com/AmrGamalbit" className="text-danger hover:text-[#4b0005] underline underline-offset-4 decoration-transparent hover:decoration-danger transition-all">AmrGamalbit</a>, and{" "}
          <a href="https://github.com/jyoshitanair" className="text-fuchsia-600 hover:text-fuchsia-800 underline underline-offset-4 decoration-transparent hover:decoration-fuchsia-600 transition-all">Crewshon</a>!
        </p>
      </div>
    </div>
  );
}

export default Footer;
