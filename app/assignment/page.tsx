import React from 'react'
import TopNavBar from '../../components/TopNavBar'
import Sidebar from '../../components/Sidebar'
import TeacherProfileSection from '../../components/TeacherProfileSection'

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className='relative flex'>
        <Sidebar />
        <TeacherProfileSection />
      </main>
    </>
  )
}
