import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hi Beautiful</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/Photo1.jpg' text="wow so pretty"/>
        <CommentedImage src='/Photo2.jpg' text="omg gorgeous"/>
        <CommentedImage src='/Photo3.jpg' text="we should kiss?"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">Happy Girlfriend day</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>My</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>Beautiful</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">Gurlfriend</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So...</h1>
      </div>

      <CornyQuestion 
        question="If i am a terrorist, would you be my bomb?"
        nonactive="https://pngimg.com/uploads/osama_bin_laden/osama_bin_laden_PNG20.png"
        active="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76629/nuclear-explosion-clipart-xl.png"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Would you</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Uh</h1>
      </div>

      <CornyQuestion 
        question="if you were a fruit, you'd be fine-apple"
        nonactive="https://pngimg.com/uploads/apple/apple_PNG12455.png"
        active="https://pngimg.com/uploads/pineapple/pineapple_PNG2758.png"
        secondary
        right
      />

      <CornyQuestion 
        question="Are you french? Because Eiffel for you."
        nonactive="https://pngimg.com/uploads/france/france_PNG43.png"
        active="https://pngimg.com/uploads/france/france_PNG46.png"
        primary
        left
      />

      <CornyQuestion 
        question="Would you be the banana to my Minion?"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>If I&apos;m C would you be my C++?</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                NO WAY SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Prom Confirmation Ticket / Review</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Name of Partner
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Aidan Ouckama
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Location
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Grove by the River, Newark
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Time
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              9:00 PM - 11:00 PM
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Events
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • Dinner • Photos • Prom • Post-Prom •
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
