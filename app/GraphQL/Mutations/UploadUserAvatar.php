<?php declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\User;

class UploadUserAvatar
{
    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        $file = $args['avatar'];
        $path = $file->storePublicly('public/uploads');
        $user = User::find($args['id']);
        $user->update(['avatar' => $path]);
        return $user;
    }
}
