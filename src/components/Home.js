import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero page={"Home"} />
      <h1 className="text-center">Hello World</h1>
      <div className="container border py-5 bg-warning-subtle rounded-4 fs-3 fst-italic my-5">
        <div className="row">
          <div className="col col-lg-8 offset-lg-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              suscipit ipsa corporis, eum animi eligendi impedit officia quos
              veniam quis libero explicabo ratione optio eius blanditiis, odit
              molestiae possimus! Sunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
