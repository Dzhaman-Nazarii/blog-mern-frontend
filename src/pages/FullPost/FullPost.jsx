import React, { useEffect, useState } from "react";
import axios from "../../service/axios.js";
import { Post } from "../../components/Post/Post";
import { Index } from "../../components/AddComment/AddCooment";
import { CommentsBlock } from "../../components/CommentsBlock/CommentsBlock";
import { useParams } from "react-router-dom";

export const FullPost = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`posts/${id}`)
			.then((res) => {
				setData(res.data);
        setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				alert("Error with article");
			});
	}, [id]);

  if(isLoading) {
    return <Post isLoading={isLoading} isFullPost/>
  }

	return (
		<>
			<Post
				id={data._id}
				title={data.title}
				imageUrl="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				user={{
					avatarUrl: data.user.avatarURL,
					fullName: data.user.name,
				}}
				createdAt={data.createdAt}
				viewsCount={data.viewsCount}
				commentsCount={3}
				tags={data.tags}
				isFullPost>
				<p>{data.text}</p>
			</Post>
			<CommentsBlock
				items={[
					{
						user: {
							fullName: "Nazarii Dzhaman",
							avatarUrl:
								"https://mui.com/static/images/avatar/1.jpg",
						},
						text: "There is a test article 555555",
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
				isLoading={false}>
				<Index />
			</CommentsBlock>
		</>
	);
};
