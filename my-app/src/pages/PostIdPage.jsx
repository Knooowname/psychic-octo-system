import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService"
import { Loader } from "../components/UI/Loader/Loader"

export const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div style={{ display: 'flex', gap: '32px', flexDirection: 'column' }}>
            <h1>
                Вы открыли страницу поста c ID = {params.id}
            </h1>
            {isLoading ? <Loader /> : <div style={{fontSize: '32px'}}>{post.id}. {post.title}</div>}
            <h1>
                Комментарии
            </h1>
            {isComLoading 
                ? <Loader /> 
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: '24px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>}
        </div>
    )
}