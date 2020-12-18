export const searchApi = async (title: string) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cfduid=dd048a1236e69e6f3f56ce31c0833d0181608177911"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=1520193d`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  let results = response["Search"] as any[];

  return results
    ? results
        .filter((result) => result["Type"] === "movie")
        .map((result) => ({
          title: result["Title"],
          year: result["Year"],
          imdb: result["imdbID"],
          poster: result["Poster"],
        }))
    : [];
};
