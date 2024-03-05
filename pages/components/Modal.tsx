import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import useKeypress from 'react-use-keypress'
import type { ImageProps } from '../../lib/types'
import SharedModal from './SharedModal'

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[]
  onClose?: () => void
}) {
  let overlayRef = useRef()
  const router = useRouter()

  const { photoId } = router.query
  let index = Number(photoId)

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    router.push('/', undefined, { shallow: true })
    onClose()
  }
  function changePhotoId(newVal: number) {
    let newIndex = newVal;
  
    // Handle cycling to the end from the first photo
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
  
    // Handle cycling to the beginning from the last photo
    if (newIndex >= images.length) {
      newIndex = 0;
    }
  
    if (newIndex > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  
    setCurIndex(newIndex);
    router.push(
      {
        query: { photoId: newIndex },
      },
      `/p/${newIndex}`,
      { shallow: true }
    );
  }
  
  
  useKeypress('ArrowRight', () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (index > 0) {
      changePhotoId(index - 1)
    }
  })

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  )
}
