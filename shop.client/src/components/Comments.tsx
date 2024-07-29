import {IComment} from "@Shared/types";
import {JSX} from "react"

export default function Comments({comments}: { comments: IComment[] | undefined }): JSX.Element {
    return (
        <>
            <h1>comments</h1>
            {
                comments?.length && (
                    <>{comments.map(comment => (
                        <ul>
                            <li key={comment.id}>
                                <div>
                                    <h3>{comment.name}</h3>
                                    <div>{comment.email}</div>
                                    {comment.body}
                                </div>
                            </li>
                        </ul>))}
                    </>
                )
            }
        </>
    )
}