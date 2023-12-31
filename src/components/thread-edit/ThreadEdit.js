import {ThreadInfo} from "../sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {ON_THREAD_EDIT} from "../../modules/memos";
import './ThreadEdit.css'

export function ThreadEdit({_ThreadInfo = ThreadInfo}) {

    const thread = useSelector(state => state.selectedThreadToEdit)
    const dispatch = useDispatch();

    return <div className={"threadInfo_div"}>
            <_ThreadInfo thread={thread} onSubmit={thread =>
            dispatch({type: ON_THREAD_EDIT, thread})
        }/>
    </div>

}