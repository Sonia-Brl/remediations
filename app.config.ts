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
   
    },
       modal: {
      slots: {
        overlay: 'fixed inset-0 bg-slate-950/75',
        content: 'fixed bg-default divide-y divide-default flex flex-col focus:outline-none',
        header: 'flex items-center gap-1.5 p-4 sm:px-6 min-h-16',
        wrapper: '',
        body: 'flex-1 overflow-y-auto p-4 sm:p-6',
        footer: 'flex items-center gap-1.5 p-4 sm:px-6',
        title: 'text-highlighted font-semibold',
        description: 'mt-1 text-muted text-sm',
        close: 'absolute top-4 end-4'
      },
      variants: {
        transition: {
          true: {
            overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
            content: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
          }
        },
        fullscreen: {
          true: {
            content: 'inset-0'
          },
          false: {
            content: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] md:max-w-4xl max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden'
          }
        }
      }
    }
  }
})
