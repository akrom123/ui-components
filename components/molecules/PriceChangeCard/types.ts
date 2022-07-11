import { IBadgeProps } from "../../atoms/Badge/types"

export interface IPriceChangeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value?: string
  badge?: IBadgeProps
}