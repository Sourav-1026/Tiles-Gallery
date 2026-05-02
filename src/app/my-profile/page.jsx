"use client";
export const dynamic = "force-dynamic";
import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, Card } from "@heroui/react";

const MyProfilePage = () => {
  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user;
  console.log(user);

  if (!user) return null;

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border border-gray-300 shadow-md my-10">
        <Avatar className="h-20 w-20">
          <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
          <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateProfileModal />
      </Card>
    </div>
  );
};

export default MyProfilePage;
