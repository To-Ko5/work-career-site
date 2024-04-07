import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { url_link } from '@/types/data'
import Link from 'next/link'

type Props = {
  urlLinks: url_link[]
}

const ExternalLinkArea = ({ urlLinks }: Props) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {urlLinks.map((link, index) => {
        if (link.tooltip) {
          return (
            <div key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <Link
                        href={`${link.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    <p>{link.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        } else {
          return (
            <div key={index}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href={`${link.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                </Link>
              </Button>
            </div>
          )
        }
      })}
    </div>
  )
}

export default ExternalLinkArea
