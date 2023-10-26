import SettingField from "./setting-field";
import StudyNowField from "./StudyNowField";
import HaveQualification from "./HavaQualification";
import ChangeIconField from "./ChangeIconField";

export default function ChangeDetail() {
    return (
        <div className="relative left-[226px] top-[30px] flex flex-col gap-[76px] w-[1120px] bg-white p-[40px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-[20px]">
            <SettingField />
            <StudyNowField />
            <HaveQualification />
            <ChangeIconField />
        </div>
    );
};
