import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"
import * as React from 'react';

const layoutVariants = cva(
	"h-screen flex flex-col",
	{
		variants: {
			position: {
				center: 'justify-center items-center'
			}
		},
		defaultVariants: {},
	}
)

export function Layout({
												 className,
												 position,
												 ...props
											 }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof layoutVariants>) {
	return <div {...props} className={cn(layoutVariants({position}), className)}/>
}
