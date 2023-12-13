import { gql } from '@apollo/client';
import { useSelector } from 'react-redux';



export const GET_News = gql`  
query News {
  posts(where: {language: FA, categoryId: 7}) {
    nodes {
      title
      content
      uri
      id
      translation(language: EN) {
        title
        content
        uri
        id
      }
    }
  }
}
`




export const GET_Documentation_ir = gql`
query GET_Documentation_ir {
  posts(where: {categoryId: 20, language: FA}) {
    nodes {
      id
      postId
      title
      content
      translation(language: EN) {
         id
      	postId
   		  title
      	content
      }
    }
  }
}
`

export const GET_Documentation_iran = gql`
query GET_Documentation_ir {
  posts(where: {categoryId: 31, language: FA}) {
    nodes {
      id
      postId
      title
      content
      translation(language: EN) {
         id
      	postId
   		  title
      	content
      }
    }
  }
}
`

export const GET_Documentation_IDN = gql`
query GET_Documentation_ir {
  posts(where: {categoryId: 33, language: FA}) {
    nodes {
      id
      postId
      title
      content
      translation(language: EN) {
         id
      	postId
   		  title
      	content
      }
    }
  }
}
`

export const GET_Documentat_Details = gql`
    query GET_Documentat_Details($id: Int  ) {
      posts(where: {id: $id}) {
        nodes {
            id
            title
            uri
            date
            content
            postId
            tags {
              nodes {
                name
              }
            }
        }
      }
    }
`


export const GET_FAQ_domin = gql`
query GET_FAQ {
  posts(where: {categoryName: "faq-fa",language: FA, tag: "دامنه"}) {
    nodes {
      title
      id
      slug
      content
      translation(language: EN) {
           title
      		 id
     			 slug
      content
      }
    }
  }
}
`

export const GET_FAQ_Id = gql`
query GET_FAQ {
  posts(where: {categoryName: "faq-fa",language: FA, tag: "شناسه"}) {
    nodes {
      title
      id
      slug
      content
      translation(language: EN) {
           title
      		 id
     			 slug
      content
      }
    }
  }
}
`

export const GET_list_resellers = gql`
query GET_statistics {
  posts(where: {categoryName: "list_representative"}) {
    edges {
      node {
        id
        content
        translation(language: EN) {
          id
          content
        }
      }
    }
  }
}
`


export const GET_statistics = gql`
query GET_statistics {
  posts(where: {categoryName: "statistics"}) {
    edges {
      node {
        id
        content
        translation(language: EN) {
          id
          content
        }
      }
    }
  }
}
`


export const DocumentatId = {
  id: 0,
}

export const News_Language = {
  language: "FA",
}

export let News_CategoriesID = {
  categoryId: 7,
}
