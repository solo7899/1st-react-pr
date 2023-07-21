const Hero = ({ page, backdrop, style, isLoading = true }) => {
  let content;
  if (isLoading) {
    content = page;
  } else {
    content = "Loading...";
  }
  return (
    <>
      <header className="bg-dark text-white p-5 Hero-header" style={style}>
        <div
          className="Hero-backdrop"
          style={{ backgroundImage: `url(${backdrop})` }}
        ></div>
        <h1 className="text-center Hero-h1">
          <em>{content}</em>
        </h1>
      </header>
    </>
  );
};

export default Hero;
