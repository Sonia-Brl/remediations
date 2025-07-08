export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'slate'
    },
     link: {
      base: 'focus-visible:outline-primary',
      variants: {
        active: {
          true: 'text-primary',
          false: 'text-muted'
        },
        disabled: {
          true: 'cursor-not-allowed opacity-75'
        }
      },
      compoundVariants: [
        {
          active: false,
          disabled: false,
          class: [
            'hover:bg-primary',
            'transition-colors'
          ]
        }
      ]
    },
     popover: {
      slots: {
        content: 'bg-default rounded-none border-0 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-[--reka-popover-trigger-width] focus:outline-none pointer-events-auto translate-none',
        arrow: 'fill-default'
      }
    }, 
navigationMenu: {
      slots: {
        root: 'relative flex gap-1 [&>div]:min-w-0 w-96 ',
        list: 'isolate min-w-0 ',
        label: 'w-full flex items-center gap-1.5  px-2.5 py-1.5 ',
        item: 'min-w-0 shadow mt-4 bg-slate-100 dark:bg-slate-950 ',
        link: 'group relative w-full flex items-center gap-1.5  before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
        linkLeadingIcon: 'size-5',
        linkTrailing: 'group ms-auto inline-flex gap-1.5 items-center',
        linkTrailingBadge: 'shrink-0',
        linkTrailingBadgeSize: 'sm',
        linkTrailingIcon: 'size-5 transform group-data-[state=open]:rotate-180 transition-transform duration-200',
        linkLabel: 'text-wrap text-start p-2',
        linkLabelExternalIcon: 'inline-block size-8 align-top text-dimmed',
        childList: 'isolate',
        childLabel: 'text-highlighted',
        childItem: '',
        childLink: 'group relative size-full flex items-start text-start  before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
        childLinkWrapper: 'min-w-0',
        childLinkIcon: 'size-5 shrink-0',
        childLinkLabel: 'truncate txt-base',
        childLinkLabelExternalIcon: 'inline-block size-5 align-top',
        childLinkDescription: 'text-primary',

      },
   
    }
  }
})
