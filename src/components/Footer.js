function Footer() {
  return (
    <footer className="flex flex-col p-5 pb-10 w-full transition-colors bg-neutral-200 dark:bg-slate-900 dark:text-white">
      <div className="m-auto hidden sm:inline">
        ©️ TuCasaca.com | Ingeniería de Aplicaciones de Web 2023
      </div>
      <div className="m-auto inline sm:hidden">©️ TuCasaca.com | IAW 2023</div>
      <div className="m-auto text-center">
        Creado por <b>Emanuel Tiradani</b> y <b>Juan Pablo Sumski</b>
      </div>
    </footer>
  );
}

export default Footer;
