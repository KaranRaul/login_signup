
import { calculatePasswordStrength } from '../utils/validation';

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
    const strength = calculatePasswordStrength(password);
    const getStrengthText = () => {
        if (strength === 0) return 'Very Weak';
        if (strength === 1) return 'Weak';
        if (strength === 2) return 'Fair';
        if (strength === 3) return 'Good';
        if (strength === 4) return 'Strong';
        return 'Very Strong';
    };

    const getStrengthColor = () => {
        if (strength <= 1) return 'bg-red-500';
        if (strength === 2) return 'bg-orange-500';
        if (strength === 3) return 'bg-yellow-500';
        if (strength === 4) return 'bg-green-500';
        return 'bg-green-600';
    };
    return (
        <div className="mt-1">
            <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                    className={`h-full rounded-full transition-all duration-300 ${getStrengthColor()}`}
                    style={{ width: `${(strength / 5) * 100}%` }}
                />
            </div>
            <p className="text-sm text-gray-600 mt-1">
                Password Strength: {getStrengthText()}
            </p>
        </div>
    );
};
export default PasswordStrengthIndicator