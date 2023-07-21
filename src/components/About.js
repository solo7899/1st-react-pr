import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero page={"About"} />
      <h1 >This is about view</h1>
      <div className='container border py-5 bg-info-subtle rounded-4 fs-3 fst-italic my-5'>
        <div className='row'>
          <div className='col col-lg-8 offset-lg-2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores tenetur fuga? Omnis, aut doloribus aliquam ad ipsa magnam harum impedit nostrum commodi deleniti, modi a consectetur error quas accusamus.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
