const typeDefs = /* GraphQL */ `
  # Query Area
  type Query {
    allMovies: [Movie!]!
    movie(id: String!): Movie!
  }

  # and...other types
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Int!
    genres: [String!]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    mpa_rating: Int!
    background_image: String!
    background_image_original: String!
    small_cover_iamge: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
`;

export default typeDefs;
