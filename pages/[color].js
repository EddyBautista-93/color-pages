// import our colors array
import colors from "../data/colors.json";

// Next.js uses looks for this function in order to generate all the static files for that template.
// This allows us to to build color pages without having to hardcode each page.

// getStaticPaths definition: a function next js looks for that returns paths to be statically   generated. 
export async function getStaticPaths() {
  // loop through each color color of the array and name the route parameters for each.
  const paths = colors.map((color) => ({
    params: { color: color.name },
  }));

  // returned paths objects will look like this:
  // [
  // { params: { color: 'Marsala' } },
  // { params: { color: 'Illuminating'} }
  // ...
  // ]

  // saving all the colors in a path object allows us to to format it for next js, fallback is used for 404.
  return { paths, fallback: false };
}


// This function provides props for the react component for this page. 
export async function getStaticProps( { params }) {
    // grab the specific color
    const color = colors.find( color => color.name === params.color)
    // return in the correct format
    return { props: {color}}
}

export async function Color({ color }) {
    return <div className="color-page" style={{ backgroundColor: color.hex}}>
        <h1>{color.name}</h1>
    </div>
}