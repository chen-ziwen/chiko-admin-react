import { $t } from "@/locales";

export function transformerRecordToOptions<T extends Record<string, string>>(record: T) {
    return Object.assign(record).map([value, label] =>({ label, value })) as CommonType.OptionType<T>[];
}