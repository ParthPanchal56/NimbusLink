import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Stories from '../components/story/Stories'
import CreatePostPopup from '../components/createPost/CreatePostPopup'
import CreatePost from '../components/createPost/CreatePost'
import { useSelector } from 'react-redux'


export default function Index() {

    const { user } = useSelector((state) => ({ ...state }))

    return (
        <>
            <Header />
            <div className="content-page">
                <div className="content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 order-lg-1 order-xl-1">
                            <div className="mt-3">
                                <Sidebar />
                            </div>
                        </div>
                        <div class="col-xl-1 col-lg-2 order-lg-1 order-xl-1">
                            {/* Empty Space */}
                        </div>
                        <div class="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
                            <div className="mt-3">
                                <Stories />
                            </div>
                            <div className="mt-2">
                                <CreatePost />
                                <CreatePostPopup user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
