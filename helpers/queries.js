import { gql } from '@apollo/client';

export const GET_HOMEPAGE_POSTS = gql`
	query {
		posts {
			id
			title
			slug
			featured_image {
				id
			}
			description
			body
		}
	}
`;

export const GET_POSTS = gql`
	query {
		posts {
			id
			title
			slug
			description
			content {
				raw
			}
			coverImage {
				url
			}
		}
	}
`;