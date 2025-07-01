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
    }

  }
})
