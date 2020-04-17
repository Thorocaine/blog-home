import React from 'react';
import { graphql } from 'gatsby';
import { PageComponent } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PostSummary from '../components/PostSummary';
import BlogPostIndex from '../atoms/BlogPostIndex';
import PageHeading from '../styles/PageHeading';

const Index: PageComponent<GatsbyTypes.IndexQuery> = ({ data }) => {
	const { edges } = data.allMdx;
	const posts = edges.filter((post) => !!post.node.frontmatter?.title?.length);

	return (
		<Layout index>
			<SEO />
			<BlogPostIndex>
				<PageHeading>Posts</PageHeading>
				{posts.map(({ node }) => (
					<PostSummary key={node.id} node={node} />
				))}
			</BlogPostIndex>
		</Layout>
	);
};

const pageQuery = graphql`
	query Index {
		allMdx(
			filter: { frontmatter:{slug: { regex: "//posts//" }} }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					fileAbsolutePath
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						slug
						tags
					}
				}
			}
		}
	}
`;

export default Index;
export { pageQuery };
