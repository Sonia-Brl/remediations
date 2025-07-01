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
     dropdownMenu: {
      slots: {
        content: 'min-w-90 bg-default shadow-lg ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col',
        viewport: 'relative scroll-py-1 overflow-y-auto flex-1',
        arrow: 'fill-default',
        group: 'p-2 isolate',
        label: 'w-full flex items-center font-semibold text-highlighted',
        separator: 'mx-1 my-1 h-px bg-border',
        item: 'group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px  data-disabled:cursor-not-allowed data-disabled:opacity-75',
        itemLeadingIcon: 'shrink-0',
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
        itemTrailingIcon: 'shrink-0',
        itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0',
        itemTrailingKbdsSize: '',
        itemLabel: 'truncate',
        itemLabelExternalIcon: 'inline-block size-3 align-top text-dimmed'
      },
      variants: {
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        active: {
          true: {
            item: 'text-highlighted before:bg-elevated',
            itemLeadingIcon: 'text-default'
          },
          false: {
            item: [
              'text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50',
              'transition-colors before:transition-colors'
            ],
            itemLeadingIcon: [
              'text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default',
              'transition-colors'
            ]
          }
        },
        loading: {
          true: {
            itemLeadingIcon: 'animate-spin'
          }
        },
        size: {
          xs: {
            label: 'p-1 text-xs gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemTrailingIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          sm: {
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4',
            itemLeadingAvatarSize: '3xs',
            itemTrailingIcon: 'size-4',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'sm'
          },
          md: {
            label: 'p-1.5 text-sm gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemTrailingIcon: 'size-5',
            itemTrailingKbds: 'gap-0.5',
            itemTrailingKbdsSize: 'md'
          },
          lg: {
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5',
            itemLeadingAvatarSize: '2xs',
            itemTrailingIcon: 'size-5',
            itemTrailingKbds: 'gap-1',
            itemTrailingKbdsSize: 'md'
          },
          xl: {
            label: 'p-2 text-base gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6',
            itemLeadingAvatarSize: 'xs',
            itemTrailingIcon: 'size-6',
            itemTrailingKbds: 'gap-1',
            itemTrailingKbdsSize: 'lg'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          active: false,
          class: {
            item: 'text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10',
            itemLeadingIcon: 'text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary'
          }
        },
        {
          color: 'primary',
          active: true,
          class: {
            item: 'text-primary before:bg-primary/10',
            itemLeadingIcon: 'text-primary'
          }
        }
      ],
      defaultVariants: {
        size: 'sm'
      }
    }
  }
})
