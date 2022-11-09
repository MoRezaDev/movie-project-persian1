import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query MyQuery {
    posts {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        name
        text
      }
    }
  }
`;

export const GET_TREND_POSTS = gql`
  query MyQuery {
    posts(where: { trend: true }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        name
        text
      }
    }
  }
`;

export const GET_DUBBED_POSTS = gql`
  query MyQuery {
    posts(where: { hasDubbed: true }) {
      id
      imdbRating
      name
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query getPostDetail($slug: String!) {
    posts(where: { slug: $slug }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;

export const GET_POST_MOVIES = gql`
  query getPostDetail {
    posts(where: { hasDubbed: true }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;

export const GET_ALL_MOVIES = gql`
  query getPostDetail {
    posts(where: { type: "movie" }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;

export const GET_TREND_MOVIES = gql`
  query getPostDetail {
    posts(where: { type: "movie", AND: { trend: true } }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;

export const GET_TREND_SERIES = gql`
  query getPostDetail {
    posts(where: { type: "series", AND: { trend: true } }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;

export const GET_ALL_SERIES = gql`
  query getPostDetail {
    posts(where: { type: "series" }) {
      imdbRating
      imdbTitle
      genre
      hasDubbed
      hasSubtitle
      description
      director
      language
      name
      productCountry
      productDate
      quality
      releaseDay
      slug
      stars
      timeDuration
      title
      trend
      tvReleaseNetwork
      type
      id
      coverPhoto {
        url
      }
      comments {
        email
        name
        text
      }
    }
  }
`;
