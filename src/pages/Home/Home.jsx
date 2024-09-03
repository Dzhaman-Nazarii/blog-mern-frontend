import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { Post } from "../../components/Post/Post";
import { TagsBlock } from "../../components/TagsBlock/TagsBlock";
import { CommentsBlock } from "../../components/CommentsBlock/CommentsBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../../redux/slices/posts.js";

export const Home = () => {
	const dispatch = useDispatch();
	const {posts, tags} = useSelector(state => state.posts);
	const isPostsLoading = posts.status === "loading";
	const isTagsLoading = tags.status === "loading";

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchTags());
	}, [dispatch]);

	return (
		<>
			<Tabs
				style={{ marginBottom: 15 }}
				value={0}
				aria-label="basic tabs example">
				<Tab label="New" />
				<Tab label="Popular" />
			</Tabs>
			<Grid
				container
				spacing={4}>
				<Grid
					xs={8}
					item>
					{(isPostsLoading ? [...Array(1)] : posts.items).map((obj, index) => isPostsLoading ? (<Post key={index} isLoading={true}/>) : (
						<Post
							key={obj._id}
							id={obj._id}
							title={obj.title}
							imageUrl="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							user={{
								avatarUrl: obj.user.avatarURL,
								fullName: obj.user.name,
							}}
							createdAt={obj.createdAt}
							viewsCount={obj.viewsCount}
							commentsCount={obj.commentsCount}
							tags={obj.tags}
							isEditable
						/>
					))}
				</Grid>
				<Grid
					xs={4}
					item>
					<TagsBlock
						items={tags.items}
						isLoading={isTagsLoading}
					/>
					<CommentsBlock
						items={[
							{
								user: {
									fullName: "Nazarii Dzhaman",
									avatarUrl:
										"https://mui.com/static/images/avatar/1.jpg",
								},
								text: "There is a test comments",
							},
							{
								user: {
									fullName: "Ostap Vushnya",
									avatarUrl:
										"https://mui.com/static/images/avatar/2.jpg",
								},
								text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
							},
						]}
						isLoading={false}
					/>
				</Grid>
			</Grid>
		</>
	);
};
