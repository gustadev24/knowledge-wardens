type UserInfoProps = {
  name: string;
  email: string;
};

export function UserInfo({ name, email }: UserInfoProps) {
  return (
    <article className="flex gap-2">
      <div className="flex flex-1 flex-col self-center gap-2">
        <h5 className="font-semibold text-m text-orange-600">{name}</h5>
        <h6 className="italic text-sm font-light text-yellow-500">{email}</h6>
      </div>
    </article>
  );
}
