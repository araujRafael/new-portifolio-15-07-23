export interface DataAirtableMyStack {
  fields: {
    title: string
    image: {
      url: string
      thumbnails: {
        small: {
          url: string
        }
        large: {
          url: string
        }
        full: {
          url: string
        }
      }
    }[]  
  }
}
export interface DataAirtableProjects {
  fields: {
    title: string
    url: string
    repo:string
    created_at: string
    image: {
      url: string
      thumbnails: {
        small: {
          url: string
        }
        large: {
          url: string
        }
        full: {
          url: string
        }
      }
    }[]  
  }
}