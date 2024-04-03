import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export default function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5 bg-zinc-950 text-zinc-50">
      <Header />
      <AttendeeList />
    </div>
  )
}
