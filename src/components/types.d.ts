import {ComponentProps} from 'react'

export type StyledComponent <T> = ComponentProps<T> & { className: null } 