import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import {
    HARD_MODE_DESCRIPTION,
    HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'

type Props = {
    isOpen: boolean
    handleClose: () => void
    isHardMode: boolean
    handleHardMode: Function
    isDarkMode: boolean
    handleDarkMode: Function
    isHighContrastMode: boolean
    handleHighContrastMode: Function
}

export const SettingsModal = ({
    isOpen,
    handleClose,
    isHardMode,
    handleHardMode,
    isDarkMode,
    handleDarkMode,
    isHighContrastMode,
    handleHighContrastMode,
}: Props) => {
    return (
        <BaseModal
            title="Settings"
            isOpen={isOpen}
            handleClose={handleClose}
        >
            <div className="flex flex-col mt-2 divide-y">
                <SettingsToggle
                    settingName="Hardmode"
                    flag={isHardMode}
                    handleFlag={handleHardMode}
                    description={HARD_MODE_DESCRIPTION}
                />
                <SettingsToggle
                    settingName="Dark mode"
                    flag={isDarkMode}
                    handleFlag={handleDarkMode}
                />
                <SettingsToggle
                    settingName="High contrast mode"
                    flag={isHighContrastMode}
                    handleFlag={handleHighContrastMode}
                    description={HIGH_CONTRAST_MODE_DESCRIPTION}
                />
            </div>
        </BaseModal>
    )
}
