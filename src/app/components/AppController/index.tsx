import React, { ReactNode, FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo, TodoDispatcher } from '@/app/actions/todo'

const socket = new WebSocket('ws://localhost:8000')

interface PassedProps {
  children: ReactNode
}

interface DispatchProps {
  readonly addTodo: TodoDispatcher['addTodo']
}

type AppControllerProps = PassedProps & DispatchProps

const mapDispatchToProps: DispatchProps = {
  addTodo,
}

const AppController: FC<AppControllerProps> = (props: AppControllerProps) => {
  useEffect(() => {
    const f = () => {
      console.log('connected')
    }

    socket.addEventListener('open', f)

    return () => {
      socket.removeEventListener('open', f)
    }
  }, [])

  useEffect(() => {
    const f = (e: any) => {
      const json = JSON.parse(e.data)
      props.addTodo(json.message)
    }

    socket.addEventListener('message', f)

    return () => {
      socket.removeEventListener('message', f)
    }
  }, [])

  return <>{props.children}</>
}

export default connect(null, mapDispatchToProps)(AppController)
