# Dynamic Pages using React Router

[Dynamic Pages using React Router](https://dev.to/gdsckiitdev/dynamic-pages-using-react-router-2pm)

Implemented dynamic routing where we get data from an api and maps it dynamically to individual webpages with routes.

A list of Star Wars characters are obtained from Star Wars api at this [location](https://swapi.dev/api/people/)

For the HomePage the response is stored in data and deconstructed into person and index.  I still need to understand how this works!

The HomePage maps the contents of the /people to form a list of names.

We next create a PersonPage that fetches data from the API to share details of each person.

Each page of a person has a placeholder ':personId' in the link.  To get the parameters from the url address we need in react-router v6 to use the prop 'useParams' instead of 'match' or 'location' props.

const {
    params: { personId },
  } = match;

This took a bit of time and I stumbled when I did this:

const personId = userParams();

This made personId an object and while I could console.log personId to get a string '1' it was not usable.  I had to look around at other examples on useParams before I realized that I had to:

const {personId} = userParams();

This way personId will be of the value n, whatever the index was.  I am constantly reminder the need to be really good with the operations like map, filter etc.

