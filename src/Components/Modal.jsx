import ReviewForm from "./ReviewForm"
const Modal = ({setModal, album, only_tracks, setRefresh, editreview}) => {

   const post_data = {
    albumid: album.albumid || album.id,
    name: album.name,
    artist: album.artist || album.artists[0].name,
    release_date: album.release_date,
    image: album.image || album.images[0].url ,
    tracks: only_tracks,
    created: new Date()

   }

    const handlemodal = () => {
        setModal(modal => !modal)
        editreview.being_edited = false
    }

    return (
        <div>
            <div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-5"> {/*Modal*/}
              <div className="w-[600px] flex flex-col"> {/*Content*/}
                <button className="text-white text-xl place-self-end cursor-pointer"
                onClick={handlemodal}
                >
                  x
                </button>
                <div className="bg-indigo-50 p-2 rounded-lg">
                  {/* Review Form Inside the Modal */}
                  <ReviewForm
                  postdata={post_data}
                  setModal={setModal}
                  setRefresh={setRefresh}
                  editreview={editreview}
                  />
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Modal