function ImageHover({ imagen_frente, imagen_atras, nombre }) {
  return (
    <div className="relative">
      <img
        src={"data:image/png;base64," + imagen_frente}
        className="rounded-md transition-transform duration-300 transform hover:scale-100"
        alt={"Imagen de frente de " + nombre}
      />
      <img
        src={"data:image/png;base64," + imagen_atras}
        className="rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
        alt={"Imagen trasera de " + nombre}
      />
    </div>
  );
}

export default ImageHover;
