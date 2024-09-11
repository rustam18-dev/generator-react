import {useCardStore} from "../store"

export const Preview = () => {
  const removeFromPreviews = useCardStore(state => state.removeFromPreviews)
  const previews = useCardStore(state => state.previews)

  return <>
    {previews.map(item => (
      <div key={item.id} onClick={() => removeFromPreviews(item)} className="relative w-[30px] h-[30px] flex items-center justify-center cursor-pointer group">
        <img src="src/assets/image/delete.png" alt="delete" className="absolute left-1 top-1" />
        <img src={item.img} alt={item.alt} className="w-[30px] h-[30px] object-cover" width={100} height={100} />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300" />
      </div>
    ))}
  </>
}