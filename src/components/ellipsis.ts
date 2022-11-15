import type { ExtractPropTypes } from 'vue'

export interface IEllipsisProps {
  content: string
  rows: number
  foldText: string
  ellipsisText: string
}

export const ellipsisProps = {
  content: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 3,
  },
  foldText: {
    type: String,
    default: '全部>',
  },
  ellipsisText: {
    type: String,
    default: '...',
  },
}

export type EllipsisType = ExtractPropTypes<typeof ellipsisProps>

