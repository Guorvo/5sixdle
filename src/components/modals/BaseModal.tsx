import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/outline'

type Props = {
    title: string
    children: React.ReactNode
    isOpen: boolean
    handleClose: () => void
}

export const BaseModal = ({ title, children, isOpen, handleClose }: Props) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={handleClose}
            >
                <div className="flex items-center justify-center min-h-screen px-4 py-10 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-slate-700 bg-opacity-75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 dark:bg-brand-100">
                            <div className="absolute right-4 top-4">
                                <XCircleIcon
                                    className="w-6 h-6 cursor-pointer dark:stroke-white"
                                    onClick={() => handleClose()}
                                />
                            </div>
                            <div>
                                <div className="text-center">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-medium leading-6 text-gray-900 text-md dark:text-gray-100"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">{children}</div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
